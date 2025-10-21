# ScrollAnimation

Um componente reutilizável para criar animações baseadas em scroll em qualquer parte da sua aplicação React.

## Características

- Animação suave baseada na posição de scroll
- Configurações personalizáveis para movimento vertical (y), opacidade e escala
- Offsets de scroll configuráveis
- Suporte para desativar a animação quando necessário
- Totalmente tipado com TypeScript

## Instalação

Este componente depende do Framer Motion. Certifique-se de que você tem o Framer Motion instalado:

```bash
npm install framer-motion
# ou
yarn add framer-motion
```

## Uso Básico

```tsx
import ScrollAnimation from '../components/general/ScrollAnimation';

const MeuComponente = () => {
  return (
    <ScrollAnimation>
      <div>
        Este conteúdo será animado quando o usuário rolar a página.
        A animação padrão inclui movimento vertical, fade-in e escala.
      </div>
    </ScrollAnimation>
  );
};
```

## Propriedades

| Propriedade   | Tipo                       | Padrão            | Descrição                                                |
|---------------|----------------------------|-------------------|----------------------------------------------------------|
| children      | ReactNode                  | -                 | Conteúdo a ser animado                                   |
| className     | string                     | ''                | Classes CSS para o elemento wrapper                      |
| style         | MotionStyle                | {}                | Estilos inline para o elemento wrapper                   |
| yRange        | [number, number]           | [50, -50]         | Intervalo de movimento vertical [inicial, final]         |
| opacityRange  | [number, number, number?]  | [0, 1, 1]         | Intervalo de opacidade [inicial, meio, final]            |
| scaleRange    | [number, number]           | [0.9, 1]          | Intervalo de escala [inicial, final]                     |
| offsetStart   | ScrollOffset               | "start end"       | Offset inicial para a animação                           |
| offsetEnd     | ScrollOffset               | "end start"       | Offset final para a animação                             |
| once          | boolean                    | false             | Se a animação deve ocorrer apenas uma vez                |
| disabled      | boolean                    | false             | Desativa a animação completamente                        |

## Exemplos

### Animação Personalizada

```tsx
<ScrollAnimation 
  yRange={[100, -50]}         // Movimento vertical mais dramático
  opacityRange={[0, 1, 0.8]}  // Fade-in com leve fade-out no final
  scaleRange={[0.8, 1.1]}     // Escala de 0.8 para 1.1
  className="minha-classe"
>
  <div>Conteúdo com animação personalizada</div>
</ScrollAnimation>
```

### Animação Apenas Uma Vez

```tsx
<ScrollAnimation once={true}>
  <div>Este conteúdo será animado apenas na primeira vez que entrar na viewport</div>
</ScrollAnimation>
```

### Desativando a Animação

```tsx
<ScrollAnimation disabled={isMobile}>
  <div>A animação será desativada em dispositivos móveis se isMobile for true</div>
</ScrollAnimation>
```

## Uso Avançado

### Múltiplas Animações em Sequência

```tsx
<div className="space-y-8">
  {[1, 2, 3].map((item) => (
    <ScrollAnimation 
      key={item}
      offsetStart={[0, 0.85 - (item * 0.05)]}
      offsetEnd={[1, 0.5 - (item * 0.05)]}
    >
      <div>Elemento {item} em sequência</div>
    </ScrollAnimation>
  ))}
</div>
```

### Combinando com Outros Componentes de Animação

```tsx
<ScrollAnimation>
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h2>Título Interativo</h2>
    <p>Este elemento tem animação de scroll e também responde a hover e tap.</p>
  </motion.div>
</ScrollAnimation>
```

## Notas de Implementação

- O componente usa `useScroll` e `useTransform` do Framer Motion para criar animações suaves baseadas na posição de scroll.
- A referência `elementRef` é usada para rastrear a posição do elemento na viewport.
- As transformações (y, opacity, scale) são aplicadas com base no progresso do scroll.
- O componente suporta diferentes configurações de offset para controlar quando a animação começa e termina.

## Compatibilidade

Este componente é compatível com React 16.8+ e requer Framer Motion 4.0+. 