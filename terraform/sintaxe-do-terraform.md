## Sintaxe do Terraform

A sintaxe do Terraform é baseada em uma linguagem declarativa e possui elementos-chave que são utilizados para definir a configuração da infraestrutura. Aqui estão os principais componentes da sintaxe do Terraform:

### Blocos

Os blocos são estruturas fundamentais no Terraform e são delimitados por chaves `{}`. Existem diferentes tipos de blocos usados para definir recursos, variáveis, provedores e muito mais.

Exemplo de bloco de recurso para criar uma instância EC2 na AWS:
```ts
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
}
```

### Atributos

Dentro de um bloco, existem atributos que definem as propriedades do recurso. Eles são especificados usando o formato `chave = valor`. Os valores podem ser literais ou referências a variáveis.

Exemplo de atributos para definir o nome e a região da instância EC2:
```ts
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  tags = {
    Name = "my-instance"
  }
  availability_zone = "us-west-2a"
}
```

### Variáveis

As variáveis no Terraform permitem parametrizar a configuração e torná-la mais flexível. Elas são definidas em blocos separados chamados de `variable` e podem ser usadas em diferentes partes da configuração.

Exemplo de definição de variável:
```ts
variable "region" {
  description = "The AWS region"
  default     = "us-west-2"
}
```

Exemplo de uso de variável:
```ts
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  availability_zone = "${var.region}a"
}
```

### Provedores

Os provedores são responsáveis por interagir com os serviços de infraestrutura, como AWS, Azure, GCP, etc. Eles são definidos em blocos `provider` e especificam as credenciais e configurações necessárias para acessar cada serviço.

Exemplo de configuração de provedor para a AWS:
```ts
provider "aws" {
  region     = "us-west-2"
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
}
```

### Execução de Comandos no Servidor

O Terraform permite a execução de comandos no servidor recém-provisionado por meio do atributo `user_data`. Esse atributo é utilizado para fornecer um script personalizado que será executado no momento da criação da instância.

Exemplo de uso do atributo `user_data` para executar comandos no servidor:

```ts
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"

  user_data = <<-EOF
    #!/bin/bash
    cd /home/ubuntu
    echo "<h1>Mensagem a ser mostrada</h1>" > index.html
    nohup busybox httpd -f -p 8080 &
    EOF

  tags = {
    Name = "my-instance"
  }
}
```

Nesse exemplo, o atributo `user_data` contém um script em formato de string multilinha. O script utiliza comandos bash para criar um arquivo `index.html` com uma mensagem HTML e inicia um servidor web utilizando o programa `busybox` na porta 8080.

Ao provisionar essa instância, o Terraform executará automaticamente o script no servidor recém-criado, permitindo que você configure e personalize o ambiente conforme necessário.

Essa funcionalidade é útil para executar tarefas de configuração inicial, instalação de software, configuração de serviços adicionais e muito mais, facilitando a automação de ações específicas no servidor durante o processo de provisionamento.

É importante lembrar que o conteúdo do atributo `user_data` deve estar no formato adequado para o sistema operacional em execução na instância e para a configuração desejada.

### Comandos

O Terraform possui uma variedade de comandos que permitem a execução de diferentes ações, como inicialização, planejamento e aplicação de alterações na infraestrutura. Alguns dos comandos mais comuns são:

- `terraform init`: Inicializa um diretório de configuração do Terraform, baixando os plugins necessários.
- `terraform plan`: Gera um plano de execução mostrando as alterações propostas na infraestrutura.
- `terraform apply`: Aplica as alterações definidas no plano, criando, modificando ou destruindo os recursos conforme necessário.
- `terraform destroy`: Remove completamente os recursos provisionados.