# 📌 TODO – Sistema de Controle de Atendimento

Este arquivo registra todas as tarefas pendentes, concluídas e planejadas para o desenvolvimento do sistema de controle de atendimento solicitado pela disciplina.

---

## ✅ Funcionalidades Concluídas

### 🔹 Estrutura Básica
- [x] Criar páginas base em **HTML**
- [x] Criar arquivo de estilo **CSS**
- [x] Criar lógica principal em **JavaScript**
- [x] Criar botões de emissão de senhas (SP, SG e SE)
- [x] Exibir a última senha emitida
- [x] Manter filas separadas: `filaSP`, `filaSG`, `filaSE`

### 🔹 Lógica do Sistema
- [x] Gerar senhas no formato: **YYMMDD-PPSQ**
- [x] Controlar sequência por tipo (SP, SG, SE)
- [x] Implementar regra de atendimento:
  - [x] SP → SE/SG → SP → SE/SG …
- [x] Chamar a próxima senha baseada nas regras
- [x] Criar painel com as últimas 5 chamadas
- [x] Atualizar o painel automaticamente
- [x] Exibir mensagem quando não houver senhas na fila

### 🔹 Organização
- [x] Separar o JavaScript em **6 arquivos** (trabalho em grupo)
- [x] Comentar o código detalhadamente
- [x] Explicar vetores, variáveis e funções
- [x] Documentar lógica do projeto

---

## 🔧 Funcionalidades Pendentes (Opcional / Avançado)
- [ ] Simulação dos tempos médios (TM)
- [ ] Relatório diário/mensal
- [ ] Registro de horário de atendimento
- [ ] Descarte de 5% das senhas
- [ ] Controle de expediente (07:00–17:00)

---

## 👥 Divisão do Trabalho em Grupo

| Membro | Responsabilidade |
|--------|------------------|
| Pessoa 1 | filas.js – controle das filas |
| Pessoa 2 | estado.js – variáveis globais |
| Pessoa 3 | gerarNumero.js – geração da senha |
| Pessoa 4 | emitirSenha.js – emissão e cadastro |
| Pessoa 5 | atualizarPainel.js – painel de exibição |
| Pessoa 6 | chamarProxima.js – regras de atendimento |

---

## ✔ Status Geral do Projeto
**Versão atual:** Funcional, incluindo emissão, filas e chamadas.
