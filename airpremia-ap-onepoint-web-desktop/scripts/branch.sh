## Branch 생성 스크립트
## 사용법: yarn branch [branch_name]
## ex> yarn branch feature_main

if [ "$#" -lt 1 ]; then
    echo "브랜치 이름을 입력하세요."
    exit 1
fi

git checkout -b $1
echo === Main Branch [$1] 변경완료
git submodule foreach git checkout -b $1
echo === Submodule Branch [$1] 변경완료