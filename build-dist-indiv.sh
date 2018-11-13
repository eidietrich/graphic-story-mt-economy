# packaging ai2html files for individual upload

echo "running"

rm -rf dist-indiv
mkdir dist-indiv
mkdir -p dist-indiv/assets/graphics
cp src/html/partials/story/*.preview.html dist-indiv
cp src/assets/graphics/* dist-indiv/assets/graphics/

echo "done"