# Remoção completa do Storybook (Windows PowerShell / PowerShell 7)

Write-Host "🗑️ Removendo Storybook do projeto..." -ForegroundColor Red

# 1) Conferir diretório
if (-not (Test-Path "package.json")) {
  Write-Host "❌ package.json não encontrado. Execute na raiz do projeto." -ForegroundColor Red
  exit 1
}

# 2) Lista de pacotes de Storybook (ajuste se tiver outros)
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

# 3) Desinstalar pacotes (atualiza lockfile corretamente)
Write-Host "📦 Removendo dependências do Storybook..." -ForegroundColor Yellow
foreach ($pkg in $storybookPkgs) {
  Write-Host "  - npm remove -D $pkg"
  npm remove -D $pkg | Out-Null
}

# 4) Remover scripts storybook do package.json com segurança (mantendo UTF-8)
Write-Host "📝 Limpando scripts storybook do package.json..." -ForegroundColor Yellow
$pkg = Get-Content package.json -Raw | ConvertFrom-Json

if ($pkg.scripts) {
  foreach ($s in @("storybook","build-storybook")) {
    if ($pkg.scripts.PSObject.Properties.Name -contains $s) {
      $pkg.scripts.PSObject.Properties.Remove($s) | Out-Null
      Write-Host "  ✓ script removido: $s" -ForegroundColor Green
    }
  }
}

# Salvar como UTF-8 (sem BOM). Em PS 5, use -Encoding UTF8.
$pkg | ConvertTo-Json -Depth 20 | Set-Content -Encoding UTF8 package.json
Write-Host "✓ package.json salvo em UTF-8" -ForegroundColor Green

# 5) Remover pastas e arquivos do Storybook
Write-Host "🗂️ Removendo arquivos/pastas do Storybook..." -ForegroundColor Yellow
$paths = @(".storybook","stories","storybook-static")
foreach ($p in $paths) {
  if (Test-Path $p) { Remove-Item $p -Recurse -Force; Write-Host "  ✓ Removido: $p" -ForegroundColor Green }
}

# Remover *.stories.*
Get-ChildItem -Recurse -File -Include *.stories.tsx,*.stories.ts,*.stories.jsx,*.stories.js,*.stories.mdx |
  ForEach-Object {
    Remove-Item $_.FullName -Force
    Write-Host "  ✓ Removido: $($_.FullName)" -ForegroundColor Green
  }

# 6) Reinstalar dependências do zero
Write-Host "🧹 Limpando dependências..." -ForegroundColor Yellow
if (Test-Path node_modules) { Remove-Item node_modules -Recurse -Force }
if (Test-Path package-lock.json) { Remove-Item package-lock.json -Force }

# Se você está usando a estratégia de ignorar peer deps:
$npmFlags = if ($env:NPM_FLAGS) { $env:NPM_FLAGS } else { "--legacy-peer-deps" }
Write-Host "📥 npm install $npmFlags" -ForegroundColor Yellow
npm install $npmFlags
if ($LASTEXITCODE -ne 0) { Write-Host "❌ npm install falhou." -ForegroundColor Red; exit 1 }

# 7) (Opcional) Ajustar build para ignorar stories, se ainda existir algum
# Crie tsconfig.build.json e use: "tsc -p tsconfig.build.json && vite build"
# … só se você decidiu manter alguns stories por qualquer motivo.

# 8) Testar build
Write-Host "🏗️ Rodando build: npm run build" -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "❌ Build falhou." -ForegroundColor Red; exit 1 }

Write-Host "`n✅ Storybook removido e build OK." -ForegroundColor Green
