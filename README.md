# Gerador de Código de Barras 

Este é um projeto simples e funcional de **Gerador de Código de Barras** desenvolvido com **HTML**, **CSS** e **JavaScript**. Ele permite criar códigos de barras baseados no texto ou número digitado e oferece a opção de baixá-los como imagem.

## Recursos

- **Geração de códigos de barras** utilizando o formato `CODE128`.
- **Interface responsiva e moderna**.
- Opção para **baixar o código de barras** gerado como uma imagem PNG.

## Demonstração

![Gerador-codigo-barras](https://github.com/user-attachments/assets/4064936a-e3f2-49f3-95b2-48e6b5c906ff)

## Tecnologias Utilizadas

<a href="https://programartudo.blogspot.com/2024/11/html-tudo-o-que-precisa-para-comecar.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40"/></a> <a href="https://programartudo.blogspot.com/2024/11/css-como-dar-estilo-ao-teu-website.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/></a> <a href="https://programartudo.blogspot.com/2024/11/javascript-linguagem-dinamica-da-web.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/></a>

- **HTML**: Estrutura do projeto.
- **CSS**: Estilização responsiva e atraente.
- **JavaScript**: Lógica do gerador e integração com a biblioteca [JsBarcode](https://github.com/lindell/JsBarcode).
- **JsBarcode**: Biblioteca para geração de códigos de barras.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Ninja1375/Gerador-codigo-barras.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd Gerador-codigo-barras
   ```

3. Abra o arquivo `index.html` no navegador.

4. Digite o texto ou número no campo de entrada e clique no botão "**Gerar Código de Barras**".

5. O código de barras será exibido. Clique no botão "**Baixar Código de Barras**" para salvar a imagem no seu dispositivo.

## Estrutura do Projeto

```plaintext
Gerador-codigo-barras/
├── index.html # Estrutura principal do projeto
├── style.css  # Estilos personalizados
├── script.js  # Lógica do gerador
└── README.md  # Documentação do projeto
```

## Personalização

Você pode personalizar o estilo do gerador editando o arquivo `style.css`. 

Para alterar as opções do código de barras (como altura e largura), modifique as configurações no arquivo `script.js`:

```javascript
JsBarcode(barcode, input, {
  format: "CODE128",
  lineColor: "#000",
  width: 2,
  height: 100,
  displayValue: true,
  fontSize: 18,
});
```
## Contribuições

Sinta-se à vontade para contribuir com melhorias ou novas funcionalidades. Para isso:

1. Faça um fork do projeto.

2. Crie uma branch para sua feature:

   ```bash
   git checkout -b minha-nova-feature
   ```

3. Faça suas alterações e envie um pull request.

## Apoie-me:

<a href="https://buymeacoffee.com/antonio13" target="_blank"><img loading="lazy" src="https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=seu_nome_de_usuario&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" width="130" height="30"></a>

<a href="https://www.paypal.com/donate/?hosted_button_id=DN574F28FYUNG" target="_blank"><img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="130" height="30"></a>
