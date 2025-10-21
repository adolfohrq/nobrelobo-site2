# Script para configurar e testar o Storybook
# Execute este script no diretório do projeto

Write-Host "🚀 Configurando Storybook para o projeto Nobre Lobo..." -ForegroundColor Green

# Verificar se estamos no diretório correto
if (Test-Path "package.json") {
    Write-Host "✓ Arquivo package.json encontrado" -ForegroundColor Green
    
    # Instalar dependências atualizadas
    Write-Host "📦 Instalando dependências atualizadas do Storybook..." -ForegroundColor Yellow
    npm install
    
    # Verificar se o Storybook está funcionando
    Write-Host "🧪 Testando configuração do Storybook..." -ForegroundColor Yellow
    
    # Verificar se os arquivos de configuração existem
    $configFiles = @(
        ".storybook/main.ts",
        ".storybook/preview.ts",
        ".storybook/manager.ts"
    )
    
    $allConfigFilesExist = $true
    foreach ($file in $configFiles) {
        if (Test-Path $file) {
            Write-Host "✓ $file encontrado" -ForegroundColor Green
        } else {
            Write-Host "✗ $file não encontrado" -ForegroundColor Red
            $allConfigFilesExist = $false
        }
    }
    
    if ($allConfigFilesExist) {
        Write-Host "✅ Configuração do Storybook completa!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📚 Para executar o Storybook:" -ForegroundColor Cyan
        Write-Host "   npm run storybook" -ForegroundColor White
        Write-Host ""
        Write-Host "🔧 Para build do Storybook:" -ForegroundColor Cyan
        Write-Host "   npm run build-storybook" -ForegroundColor White
        Write-Host ""
        Write-Host "🌐 O Storybook estará disponível em:" -ForegroundColor Cyan
        Write-Host "   http://localhost:6006" -ForegroundColor White
        Write-Host ""
        Write-Host "📖 Componentes documentados:" -ForegroundColor Cyan
        Write-Host "   - UI Components (Button, CustomLink)" -ForegroundColor White
        Write-Host "   - General Components (Hero, ServiceCard, Navbar)" -ForegroundColor White
        Write-Host "   - Icons (ServiceIcons e ícones individuais)" -ForegroundColor White
        Write-Host "   - Sections (ServicesSection, ContactSection)" -ForegroundColor White
        Write-Host ""
        Write-Host "🎨 Design System configurado com:" -ForegroundColor Cyan
        Write-Host "   - Tema escuro personalizado" -ForegroundColor White
        Write-Host "   - Suporte ao Tailwind CSS" -ForegroundColor White
        Write-Host "   - Cores da marca Nobre Lobo" -ForegroundColor White
        Write-Host "   - Tipografia Gilroy e Poppins" -ForegroundColor White
        
    } else {
        Write-Host "❌ Erro: Alguns arquivos de configuração estão faltando" -ForegroundColor Red
    }
    
} else {
    Write-Host "✗ Erro: Arquivo package.json não encontrado" -ForegroundColor Red
    Write-Host "Certifique-se de estar no diretório correto do projeto" -ForegroundColor Yellow
}
