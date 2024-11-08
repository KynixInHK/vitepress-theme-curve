#!/usr/bin/env fish

## 指定資料夾和檔案名稱
set year (date +%Y)
set script_dir (dirname (status --current-filename))
set folder_path "$script_dir/../posts/$year"
set file_name (python -c 'import time; print(f"{int(time.time() * 1000)}.md")')

## 檢查資料夾是否存在
if test ! -d "$folder_path"
    mkdir -p "$folder_path"
    echo "資料夾 $folder_path 不存在，已創建該資料夾。"
else
    echo "資料夾 $folder_path 已存在。"
end

## 在指定資料夾中建立檔案
touch "$folder_path/$file_name"
echo "---
title: $file_name
tags: []
categories: []
date: $(date +%Y-%m-%d)
description: 
articleGPT: 
top: false
---" >> $folder_path/$file_name
echo "在資料夾 $folder_path 中創建檔案 $file_name 完成。"