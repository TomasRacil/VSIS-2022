# Backend
V rámci tohoto adresáře je vytvořena ukázková REST API, která slouží jako výchozí bod pro další rozvoj.

## Ovládání

Spuštění flask serveru:
```shell
make run
```

Inicializace DB
```shell
make init-db
```

Vytvoření migračního skriptu
```shell
python -m flask db migrate --message 'initial database migration'
```

Provedení migrace na novou verzi
```shell
make db-upgrade
```

Provedení migrace na předchozí verzi
```shell
make db-downgrade
```