## O que é o Ansible

O Ansible é uma ferramenta de automação que simplifica a configuração e o gerenciamento de sistemas. Ele usa arquivos de configuração chamados de "playbooks" para descrever as tarefas que deseja realizar, como instalar software e configurar serviços.

## Relação com o Terraform

O [Terraform](/terraform/o-que-e-o-terraform.md) é usado para criar e gerenciar a infraestrutura em provedores de nuvem. Ele permite definir a infraestrutura como código. 

O Ansible e o Terraform podem ser usados juntos para automatizar todo o processo, desde o provisionamento da infraestrutura até a configuração dos sistemas. 

Com o Terraform, você cria a infraestrutura necessária e, em seguida, usa o Ansible para configurar automaticamente os sistemas provisionados com as tarefas e as configurações desejadas. Isso permite um processo de implantação e gerenciamento mais integrado, escalável e reprodutível.

### Principais Arquivos do Ansible

- **Playbooks**: Os playbooks são arquivos YAML que contêm as tarefas a serem executadas pelo Ansible. Neles, você define os hosts, as tarefas e as configurações desejadas.

Exemplo de um playbook básico:
```yaml
---
- name: Exemplo de Playbook
  hosts: webservers
  tasks:
    - name: Instalar o Apache
      apt:
        name: apache2
        state: present
```

- **Inventário**: O inventário é um arquivo que lista os hosts que o Ansible deve gerenciar. Pode ser um arquivo estático ou dinâmico, especificando os endereços IP ou nomes dos hosts.

Exemplo de um inventário básico:
```ini
[webservers]
web1 ansible_host=192.168.1.10
web2 ansible_host=192.168.1.11
```

- **Arquivos de Variáveis**: Os arquivos de variáveis contêm valores que podem ser referenciados nos playbooks. Eles permitem definir informações específicas para cada ambiente ou host.

Exemplo de um arquivo de variáveis básico:
```yaml
---
web_server_port: 8080
database_name: mydb
```

### Comandos do Ansible

- `ansible-playbook`: Executa um playbook específico.

Exemplo de comando para executar um playbook:
```
ansible-playbook playbook.yml -u <user> --private-key <key.pem> -i hosts.yml
```

- `ansible`: Executa um módulo ou comandos em um host ou grupo de hosts.

Exemplo de comando para executar um módulo no host "web1":
```
ansible web1 -m ping
```

- `ansible-galaxy`: Gerencia papéis do Ansible, que são coleções de funcionalidades reutilizáveis.

Exemplo de comando para instalar um papel do Ansible:
```
ansible-galaxy install nome-do-papel
```

### Sintaxe do Ansible

- **Módulos**: Os módulos são peças de código que executam tarefas específicas, como instalar pacotes ou reiniciar serviços. Eles são usados nos playbooks para realizar ações nos hosts gerenciados.

Exemplo de uso do módulo `apt` para instalar o Apache:
```yaml
- name: Instalar o Apache
  apt:
    name: apache2
    state: present
```

- **Tarefas**: As tarefas são ações individuais que devem ser executadas. Elas são organizadas em uma lista dentro do playbook e podem conter módulos, comandos ou outras ações.

Exemplo de tarefa básica:
```yaml
tasks:
  - name: Copiar arquivo de configuração
    copy:
      src: arquivo.conf
      dest: /etc/aplicacao/arquivo.conf
```