$path = "C:\Users\Ruboy\Desktop\New folder\index.html"
$html = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# 1. Remove visualizer blocks from fl-center
$old1 = @"
        <!-- VISUALIZERS — desktop: absolute right | mobile: row below name -->
        <div class="viz-mobile-row" style="display:none;">
          <div id="vizArtistaMob"></div>
          <div id="vizProdMob"></div>
        </div>

        <!-- VISUALIZER 1 — Clipe (YouTube) — desktop only -->
        <div class="viz-window" id="vizArtista">
"@

# Find where the first visualizer block starts and ends
$vizStart = $html.IndexOf("<!-- VISUALIZERS — desktop")
$vizEnd = $html.IndexOf("</div>`r`n`r`n      </div>`r`n`r`n      <!-- Plugin Rack -->")
if($vizEnd -lt 0){ $vizEnd = $html.IndexOf("</div>", $html.IndexOf("<!-- VISUALIZER 2")) }
# Find the closing of vizProd
$prodEnd = $html.IndexOf("</div>`r`n`r`n      </div>`r`n", $html.IndexOf("vizProdPhotos"))
if($prodEnd -lt 0){ $prodEnd = $html.IndexOf("`n      </div>`n`n      <!-- Plugin Rack") }

Write-Host "vizStart: $vizStart"
Write-Host "prodEnd: $prodEnd"
