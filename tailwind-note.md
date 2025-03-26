# 🧠 FICHE MÉMO TAILWIND CSS – SPACING

## 📦 Padding (espacement intérieur)

| Classe | Effet                                                   |
| ------ | ------------------------------------------------------- |
| `p-4`  | Padding **uniforme** (haut, bas, gauche, droite) = 16px |
| `px-4` | Padding **horizontal** (gauche + droite) = 16px         |
| `py-6` | Padding **vertical** (haut + bas) = 24px                |
| `pt-2` | Padding **top** uniquement = 8px                        |
| `pb-8` | Padding **bottom** uniquement = 32px                    |
| `pl-3` | Padding **left** uniquement = 12px                      |
| `pr-5` | Padding **right** uniquement = 20px                     |

## 📦 Marges (espacement extérieur)

| Classe | Effet                                      |
| ------ | ------------------------------------------ |
| `m-2`  | Marge uniforme = 8px                       |
| `mx-4` | Marge horizontale (gauche + droite) = 16px |
| `my-3` | Marge verticale (haut + bas) = 12px        |
| `mt-1` | Marge top = 4px                            |
| `mb-6` | Marge bas = 24px                           |
| `ml-2` | Marge gauche = 8px                         |
| `mr-2` | Marge droite = 8px                         |

---

## 📏 Tableau des valeurs Tailwind (échelle par défaut)

| Classe `-0` → `-10` | Taille réelle en pixels |
| ------------------- | ----------------------- |
| `0`                 | 0px                     |
| `1`                 | 4px                     |
| `2`                 | 8px                     |
| `3`                 | 12px                    |
| `4`                 | 16px                    |
| `5`                 | 20px                    |
| `6`                 | 24px                    |
| `7`                 | 28px                    |
| `8`                 | 32px                    |
| `9`                 | 36px                    |
| `10`                | 40px                    |

---

🧰 Astuce : tu peux combiner plusieurs classes facilement !

```html
<div className="p-4 px-8 pt-2 mb-4">Exemple combiné avec padding + marge</div>
```
