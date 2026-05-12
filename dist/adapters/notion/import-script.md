# Import Script

Use CSV import or the Notion API.

## CSV path

1. Open `knowledge/index.json`.
2. Export rows with columns Title, Type, Brain Primitive, Body, Source URL.
3. In Notion, create the database from `notion-knowledge-database.md`.
4. Use Notion CSV import to load the rows.

## API path

```bash
export NOTION_TOKEN="secret_xxx"
export NOTION_DATABASE_ID="database_id"

curl -X POST "https://api.notion.com/v1/pages" \
  -H "Authorization: Bearer $NOTION_TOKEN" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  --data '{
    "parent": {"database_id": "'"$NOTION_DATABASE_ID"'"},
    "properties": {
      "Title": {"title": [{"text": {"content": "Control Design"}}]},
      "Type": {"select": {"name": "concept"}},
      "Brain Primitive": {"multi_select": [{"name": "T1"}]},
      "Source URL": {"url": "https://grcengineer.com/"}
    },
    "children": [{
      "object": "block",
      "type": "paragraph",
      "paragraph": {"rich_text": [{"type": "text", "text": {"content": "Paste the card body here."}}]}
    }]
  }'
```
