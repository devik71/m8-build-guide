#!/usr/bin/env bash
# Read-only. Run on the intended Pi, never auto-invoked by the guide.
set -euo pipefail
if [[ "$(uname -s)" != Linux ]]; then echo 'Linux Raspberry Pi required.' >&2; exit 1; fi
case "$(uname -m)" in aarch64|armv7l) ;; *) echo 'ARM host required.' >&2; exit 1;; esac
if [[ ! -r /proc/device-tree/model ]] || ! grep -q 'Raspberry Pi' /proc/device-tree/model; then
  echo 'Not identified as Raspberry Pi; no action taken.' >&2; exit 1
fi
cat /proc/device-tree/model
printf '\n'
cat /etc/os-release
uname -a
for tool in pkg-config aplay arecord vcgencmd; do
  if ! command -v "$tool" >/dev/null; then echo "Missing diagnostic tool: $tool" >&2; exit 1; fi
done
pkg-config --modversion sdl3 libserialport
aplay -l
arecord -l
vcgencmd measure_temp
vcgencmd get_throttled
