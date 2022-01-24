# gm identify -verbose ./app/resources/cartman.jpg

gm convert \
    ./app/resources/cartman.jpg \
    -font ./app/resources/impact.ttf \
    -pointsize 50 \
    -fill "#FFF" \
    -stroke "#000" \
    -strokewidth 1 \
    -draw "gravity center text 0,-155 \"Quando seu amigo\"" \
    -draw "gravity center text 0,155 \"vem te pedir dinheiro\"" \
    output.png

echo "complete!"