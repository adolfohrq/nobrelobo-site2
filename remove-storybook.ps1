# Remover Storybook e reconstruir dependências (PowerShell 5+ / 7)
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Write-Host "Iniciando limpeza do Storybook..."

# 1) Verificação de diretório
if (-not (Test-Path "package.json")) {
  Write-Host "ERRO: package.json não encontrado. Execute na raiz do projeto."
  exit 1
}

# 2) Desinstalar pacotes do Storybook (se existirem)
$storybookPkgs = @(
  "storybook",
  "@storybook/react-vite",
  "@storybook/builder-vite",
  "@storybook/addon-essentials",
  "@storybook/addon-onboarding",
  "@storybook/addons",
  "@storybook/csf-plugin",
  "@storybook/testing-library"
)

Write-Host "Removendo dependências do Storybook (se instaladas)..."
foreach ($pkg in $storybookPkgs) {
  try {
    npm remove -D $pkg | Out-Null
  } catch {
    # Ignora erro se o pacote não existir
  }
}

# 3) Remover scripts 'storybook' do package.json, preservando UTF-8
Write-Host "Limpando scripts do package.json..."
$pkgJsonRaw = Get-Content package.json -Raw
$pkg = $pkgJsonRaw | ConvertFrom-Json

if ($pkg.PSObject.Properties.Name -contains "scripts") {
  $scriptsNames = $pkg.scripts.PSObject.Properties.Name
  foreach ($s in @("storybook","build-storybook")) {
    if ($scriptsNames -contains $s) {
      $pkg.scripts.PSObject.Properties.Remove($s) | Out-Null
      Write-Host ("Script removido: {0}" -f $s)
    }
  }
}

# Salvar em UTF-8
$pkg | ConvertTo-Json -Depth 50 | Set-Content -Encoding UTF8 package.json

# 4) Remover pastas e arquivos do Storybook
Write-Host "Removendo pastas e arquivos do Storybook..."
$paths = @(".storybook", "stories", "storybook-static")
foreach ($p in $paths) {
  if (Test-Path $p) { Remove-Item $p -Recurse -Force }
}

Get-ChildItem -Recurse -File -Include `
  *.stories.tsx,*.stories.ts,*.stories.jsx,*.stories.js,*.stories.mdx `
| ForEach-Object {
  Remove-Item $_.FullName -Force
}

# 5) Limpar dependências e lockfile
Write-Host "Limpando node_modules e package-lock.json..."
if (Test-Path node_modules) { Remove-Item node_modules -Recurse -Force }
if (Test-Path package-lock.json) { Remove-Item package-lock.json -Force }

# 6) Reinstalar
$npmFlags = if ($env:NPM_FLAGS) { $env:NPM_FLAGS } else { "--legacy-peer-deps" }
Write-Host ("Instalando dependências com: npm install {0}" -f $npmFlags)
npm install $npmFlags
if ($LASTEXITCODE -ne 0) { Write-Host "ERRO: npm install falhou."; exit 1 }

# 7) Build do app (sem Storybook)
Write-Host "Executando build de produção: npm run build"
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "ERRO: build falhou."; exit 1 }

Write-Host "Concluído com sucesso."
