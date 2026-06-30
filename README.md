# Skincare E-commerce avec Chatbot IA

E-commerce de produits de soin de la peau avec un assistant conversationnel
qui recommande des produits selon le profil de l'utilisateur (type de peau,
problème ciblé, budget...).

## Stack technique

- **Backend** : Python (FastAPI) + SQLAlchemy + PostgreSQL
- **Frontend** : React (Vite)
- **Chatbot** : API Claude (Anthropic) avec function calling pour rechercher
  les produits en base

## Structure du projet

```
skincare-ecommerce/
├── backend/
│   ├── app/
│   │   ├── models/      # Modèles SQLAlchemy
│   │   ├── schemas/     # Schémas Pydantic
│   │   ├── routers/     # Endpoints (auth, products, orders, chat)
│   │   ├── services/    # Logique métier (chatbot, recherche produits)
│   │   ├── database.py
│   │   └── main.py
│   ├── .env.example
│   └── requirements.txt
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── api/
    │   └── context/
    └── package.json
```

## Démarrage

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env          # puis remplir les valeurs
uvicorn app.main:app --reload
```

L'API sera disponible sur `http://localhost:8000`
Documentation interactive : `http://localhost:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

## Variables d'environnement requises

Voir `backend/.env.example`. Ne jamais committer le fichier `.env` réel.

## Roadmap

- [ ] Modèles de base de données (produits, utilisateurs, commandes)
- [ ] Endpoints CRUD produits
- [ ] Authentification JWT
- [ ] Module chatbot avec function calling
- [ ] Panier et checkout
- [ ] Interface React (catalogue, produit, panier, chat widget)
