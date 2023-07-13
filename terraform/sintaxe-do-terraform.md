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

### Comandos

O Terraform possui uma variedade de comandos que permitem a execução de diferentes ações, como inicialização, planejamento e aplicação de alterações na infraestrutura. Alguns dos comandos mais comuns são:

- `terraform init`: Inicializa um diretório de configuração do Terraform, baixando os plugins necessários.
- `terraform plan`: Gera um plano de execução mostrando as alterações propostas na infraestrutura.
- `terraform apply`: Aplica as alterações definidas no plano, criando, modificando ou destruindo os recursos conforme necessário.
- `terraform destroy`: Remove completamente os recursos provisionados.