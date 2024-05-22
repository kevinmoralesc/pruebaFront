#!/bin/bash

# Verificar si hay commits en la rama actual antes de intentar retroceder
if [ "$(git rev-list --count HEAD)" -gt 1 ]; then
    # Revertir los cambios locales
    echo "Revertir los cambios locales."
    git reset --hard HEAD~1
else
    echo "No hay commits disponibles antes de HEAD. No se pueden revertir los cambios."
fi