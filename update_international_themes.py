# update_international_themes.py
# Run from: C:\yamecene\yamecene-project-improved
from pathlib import Path

root = Path.cwd()
target = root / "src" / "components" / "yamecenes" / "HomePage.tsx"

if root.name != "yamecene-project-improved" or not target.is_file():
    raise SystemExit("Run this script from C:\\yamecene\\yamecene-project-improved")

source = target.read_text(encoding="utf-8")

replacements = {
    "RDC et diaspora congolaise": "Une plateforme ouverte aux projets et aux communautés",
    "DRC and Congolese diaspora": "A platform open to projects and communities",
    "Mobile Money, cartes et paiements diaspora sont relies a des partenaires specialises.":
        "Mobile Money, cartes et autres moyens de paiement sont reliés à des partenaires spécialisés.",
    "Mobile money, cards and diaspora payments connect through specialist partners.":
        "Mobile money, cards and other payment methods connect through specialist partners.",
}

for old, new in replacements.items():
    source = source.replace(old, new)

helper = """
function projectPresentation(project: Project, locale: 'fr' | 'en') {
  const title = project.title.toLowerCase()

  if (title.includes('clinique') || title.includes('medical')) {
    return locale === 'fr'
      ? {
          title: "Achat d’une ambulance communautaire",
          summary: "Une initiative structurée pour améliorer la mobilité médicale et l’accès aux soins.",
        }
      : {
          title: "Community ambulance purchase",
          summary: "A structured initiative to improve medical mobility and access to care.",
        }
  }

  if (title.includes('veuve') || title.includes('widow')) {
    return locale === 'fr'
      ? {
          title: "Poulailler communautaire pour les veuves",
          summary: "Une initiative d’autonomie économique, de revenus durables et de production locale.",
        }
      : {
          title: "Community poultry project for widows",
          summary: "An economic-autonomy initiative creating sustainable income and local production.",
        }
  }

  return { title: project.title, summary: project.summary }
}
"""

marker = "\nexport function HomePage() {"
if "function projectPresentation(" not in source:
    source = source.replace(marker, helper + marker, 1)

old_card_content = (
    '>{project.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">'
    "{project.summary}</p>"
)
new_card_content = (
    '>{projectPresentation(project, locale).title}</h3>'
    '<p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">'
    "{projectPresentation(project, locale).summary}</p>"
)

if old_card_content in source:
    source = source.replace(old_card_content, new_card_content, 1)
elif new_card_content not in source:
    raise SystemExit("The project-card markup was not found. No file was changed.")

target.write_text(source, encoding="utf-8", newline="\n")
print(f"Updated: {target}")