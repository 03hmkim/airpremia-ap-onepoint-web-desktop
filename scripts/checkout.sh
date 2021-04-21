## Branch checkout 스크립트 (만들어져 있는 브랜치만 가능)
if [ "$#" -lt 1 ]; then
    echo "브랜치 이름을 입력하세요."
    exit 1
fi

git fetch && git checkout $1
echo === Main Branch [$1] 변경완료
git submodule foreach git checkout $1
echo === Submodule Branch [$1] 변경완료