outdated_dependencies=$(npm outdated | tail -n -1 | grep -v beta | grep -v fs)

if [[ ${outdated_dependencies} ]]; then
    echo "Dependencies outdated"
    echo "$outdated_dependencies"
    exit 1
else
    exit 0
fi
