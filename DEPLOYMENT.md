# Deployment Guide

## 1. Store in Personal GitHub

1.  **Create Repository**:
    - Go to [GitHub.com/new](https://github.com/new).
    - Name it `jigar-portfolio`.
    - Do **not** initialize with README/license (keep it empty).

2.  **Generate Personal Access Token (Required)**:
    - Since GitHub removed password support, you need a Token.
    - Go to **[Tokens (Classic)](https://github.com/settings/tokens/new)**.
    - Note: You may need to scroll down to "Developer settings" -> "Personal access tokens" -> "Tokens (classic)".
    - Click **Generate new token (classic)**.
    - **Note**: `Jigar Portfolio Deployment`.
    - **Expiration**: No expiration (or as desired).
    - **Select scopes**: Check `repo` (Full control of private repositories).
    - Click **Generate token**.
    - **COPY THIS TOKEN**. You won't see it again.

3.  **Push Code**:
    Open your terminal in this project folder and run:
    ```bash
    git push -u origin main
    ```
    - **Username**: `jigarsolanki0212`
    - **Password**: [PASTE YOUR TOKEN HERE]
      *(The cursor won't move when you paste, that's normal. Just hit Enter).*

## 2. Host on Vercel (Free)

1.  Go to [Vercel.com](https://vercel.com) and log in with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your new `jigar-portfolio` repository.
4.  Click **Deploy**.
