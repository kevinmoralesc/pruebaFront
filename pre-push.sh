#!/bin/bash

# Imprimir el estado actual del repositorio antes de revertir los cambios
echo "Estado actual del repositorio:"
git log --oneline
git status

# Obtener el hash del commit anterior
PREVIOUS_COMMIT=$(git log --format=%H HEAD^1)

# Verificar si hay un commit anterior disponible
if [ -z "$PREVIOUS_COMMIT" ]; then
    echo "No hay un commit anterior disponible en la rama actual. No se realizará ninguna acción."
    exit 0
fi

# Revertir los cambios locales al commit anterior
echo "Revertir los cambios locales al commit anterior: $PREVIOUS_COMMIT"
if git reset --hard "$PREVIOUS_COMMIT"; then
    echo "Cambios revertidos exitosamente."
else
    echo "Error: No se pudo revertir los cambios."
    exit 1
fi