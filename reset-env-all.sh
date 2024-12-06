#!/bin/bash

ENV_TYPES_DELETE=("development" "preview" "production") # Các loại môi trường cần xóa
# ENV_TYPES_ADD=("production") # Các loại môi trường cần thêm

# Xóa tất cả biến môi trường
for ENV_TYPE in "${ENV_TYPES_DELETE[@]}"; do
    echo "Removing variables from $ENV_TYPE..."

    # Lấy danh sách biến môi trường
    VARIABLES=$(vercel env ls $ENV_TYPE | tail -n +2 | awk '{print $1}')

    for VAR in $VARIABLES; do
        echo "Removing $VAR from $ENV_TYPE..."
        vercel env rm $VAR $ENV_TYPE --yes
    done
done

# Thêm lại tất cả biến môi trường từ .env
# for ENV_TYPE in "${ENV_TYPES_ADD[@]}"; do
#     echo "Adding variables to $ENV_TYPE from .env..."
#     while IFS= read -r LINE || [[ -n "$LINE" ]]; do
#         KEY=$(echo "$LINE" | cut -d '=' -f 1)
#         VALUE=$(echo "$LINE" | cut -d '=' -f 2-)
#         echo "$KEY=$VALUE"
#         echo "$VALUE" | vercel env add $KEY $ENV_TYPE
#     done < .env.production
# done
