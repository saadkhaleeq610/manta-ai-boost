export function openVapiWidget() {
  if (window.VapiWidget && typeof window.VapiWidget.open === "function") {
    window.VapiWidget.open();
  } else {
    setTimeout(openVapiWidget, 200);
  }
}