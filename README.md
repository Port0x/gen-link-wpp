# gen-link-wpp

Gerador de links do WhatsApp com mensagens personalizadas. Informe o número, escreva a mensagem e copie o link para compartilhar.

**JavaScript · AngularJS 1.8.2 · HTML · CSS**

![Interface do gerador de links do WhatsApp](https://github.com/user-attachments/assets/75fbc5db-4ef7-4aad-8c1f-c7a28609f3a3)

## Funcionalidades

- Monta um link `wa.me` a partir do número informado.
- Remove caracteres que não são dígitos do número.
- Codifica a mensagem com `encodeURIComponent`, preservando acentos e caracteres especiais no link.
- Oferece um botão para copiar o resultado para a área de transferência.

O link prepara a conversa no WhatsApp; o aplicativo não envia mensagens automaticamente.

## Executar localmente

Não há build, `package.json` ou instalação via npm nesta versão. Com Python 3 disponível:

```sh
git clone https://github.com/Port0x/gen-link-wpp.git
cd gen-link-wpp
python3 -m http.server 8000 --bind 127.0.0.1
```

Abra **http://localhost:8000/home.html**. Outro servidor de arquivos estáticos também pode ser usado. É necessário acesso à internet para carregar AngularJS e Font Awesome pelos CDNs referenciados no HTML.

## Como usar

1. Informe o código do país, DDD e número, somente para um contato que você queira utilizar. O código do país não é acrescentado automaticamente.
2. Escreva a mensagem desejada.
3. Clique em **Gerar Link** e confira o resultado.
4. Use o botão de cópia para compartilhar o link.

A cópia depende da disponibilidade e permissão da Clipboard API; prefira localhost no desenvolvimento e HTTPS em uma publicação.

## Organização

| Arquivo | Responsabilidade |
| --- | --- |
| `home.html` | Formulário, resultado e carregamento das dependências externas. |
| `app.js` | Estado do formulário, montagem do link e cópia. |
| `style.css` | Apresentação visual. |

## Limitações e próximos cuidados

Este é um projeto de prática com **AngularJS**, diferente de Angular moderno. O código atual não valida se o número existe, se tem comprimento adequado ou se inclui código do país. Um campo contendo apenas pontuação também precisa de validação adicional.

Falhas ao copiar ainda não têm tratamento na interface. Não há suíte automatizada configurada. A aplicação não possui backend próprio; o número e a mensagem ficam no link gerado, portanto quem receber esse link poderá ler esses dados.

## Conferência manual

- Gerar um link com número no formato internacional e mensagem com acentos, espaços e `&`; conferir os parâmetros.
- Gerar novamente com outros dados e verificar a atualização.
- Copiar o resultado e comparar com o link exibido.
- Conferir campo vazio, número inválido e permissão de cópia negada, considerando as limitações acima.

Esse roteiro descreve verificações a executar; não representa testes automatizados nem comprovação de envio de mensagens.
