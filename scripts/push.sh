## Branch Push 스크립트

if [ "$#" -lt 1 ]; then
  echo "브랜치 이름을 입력하세요."
  exit 1
fi

git push origin $1
echo === Main Branch [$1] Push 완료
git submodule foreach git push origin $1
echo === Submodule Branch [$1] Push 완료