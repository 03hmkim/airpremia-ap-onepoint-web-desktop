## Branch 삭제 스크립트 (Local & Remote)
## 사용법: yarn branch:D [branch_name]
## ex> yarn branch:D feature_main
if [ "$#" -lt 1 ]; then
    echo "브랜치 이름을 입력하세요."
    exit 1
fi

# 마스터에도 적용되면 변경해야함
yarn checkout develop

echo ============ Local 삭제 ============
git branch -D $1
echo === Main Branch [$1] 삭제
git submodule foreach git branch -D $1
echo === Submodule Branch [$1] 삭제

echo ============ Remote 삭제 ============
git push origin :$1
echo === Main Branch [$1] 삭제
git submodule foreach git push origin :$1
echo === Submodule Branch [$1] 삭제