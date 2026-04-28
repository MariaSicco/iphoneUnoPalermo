"""Tiny static server. Avoids os.getcwd() race in http.server CLI on sandboxed contexts."""
import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from functools import partial

ROOT = "/Users/mariasicco/Desktop/iphoneUNO"
PORT = 8765

os.chdir(ROOT)
handler = partial(SimpleHTTPRequestHandler, directory=ROOT)
httpd = ThreadingHTTPServer(("127.0.0.1", PORT), handler)
print(f"Serving {ROOT} at http://127.0.0.1:{PORT}", flush=True)
try:
    httpd.serve_forever()
except KeyboardInterrupt:
    httpd.server_close()
    sys.exit(0)
