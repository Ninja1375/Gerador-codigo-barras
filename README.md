# Gerador de Código de Barras 

Este é um projeto simples e funcional de **Gerador de Código de Barras** desenvolvido com **HTML**, **CSS** e **JavaScript**. Ele permite criar códigos de barras baseados no texto ou número digitado e oferece a opção de baixá-los como imagem.

## Recursos

- **Geração de códigos de barras** utilizando o formato `CODE128`.
- **Interface responsiva e moderna**.
- Opção para **baixar o código de barras** gerado como uma imagem PNG.

## Demonstração

![Exemplo do Gerador de Código de Barras](https://via.placeholder.com/800x400?text=Demo+do+Gerador+de+C%C3%B3digo+de+Barras)

## Tecnologias Utilizadas

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
gerador-codigo-barras/
├── index.html # Estrutura principal do projeto
├── style.css # Estilos personalizados
├── script.js # Lógica do gerador     └──    README.md # Documentação do projeto 
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
