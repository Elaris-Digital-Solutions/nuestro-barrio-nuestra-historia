# Guía de Desarrollo

## 🚀 Comandos de Desarrollo

### Iniciar servidor de desarrollo
```bash
npm run dev
```

### Limpiar y reiniciar servidor (recomendado)
```bash
npm run dev:clean
```

## 🔧 Solución de Problemas

### Problema: Puertos ocupados (5173, 5174, 5175)

**Síntomas:**
- "Port 5173 is in use, trying another one..."
- El servidor se inicia en puertos diferentes al esperado
- Múltiples instancias del servidor ejecutándose

**Causa:**
- Ejecutar `npm run dev` múltiples veces sin cerrar las instancias anteriores
- Procesos de Node.js que no se terminaron correctamente

**Solución rápida:**
```bash
npm run dev:clean
```

**Solución manual:**
```bash
# Ver qué procesos están ocupando los puertos
lsof -i :5173 -i :5174 -i :5175

# Terminar todos los procesos de Vite
pkill -f "vite"

# Si persisten, forzar terminación
kill -9 $(lsof -ti :5173 -ti :5174 -ti :5175)
```

### Problema: Deadlock de esbuild

**Síntomas:**
- Error: "fatal error: all goroutines are asleep - deadlock!"
- El servidor se cuelga y termina siendo terminado por el sistema
- Mensajes de error relacionados con esbuild y goroutines

**Causa:**
- Conflicto en el bundler esbuild de Vite
- Caché corrupto de Vite/esbuild
- Dependencias conflictivas en optimizeDeps

**Solución rápida:**
```bash
npm run dev:clean
```

**Solución manual:**
```bash
# Limpiar caché de Vite y esbuild
rm -rf node_modules/.vite node_modules/.vite-cache dist

# Limpiar caché de npm
npm cache clean --force

# Reiniciar servidor
npm run dev
```

## 📋 Mejores Prácticas

### ✅ Hacer:
1. **Siempre usar `npm run dev:clean`** cuando tengas problemas con puertos
2. **Cerrar el servidor correctamente** con `Ctrl+C` antes de ejecutar comandos nuevos
3. **Verificar que no hay procesos ejecutándose** antes de iniciar el servidor
4. **Usar un solo terminal** para el servidor de desarrollo

### ❌ Evitar:
1. **Ejecutar `npm run dev` múltiples veces** sin cerrar las instancias anteriores
2. **Cerrar la terminal abruptamente** sin terminar el proceso
3. **Tener múltiples pestañas/ventanas** ejecutando el servidor simultáneamente
4. **Ignorar los mensajes de puerto ocupado**

## 🛠️ Comandos Útiles

### Verificar puertos ocupados
```bash
lsof -i :5173 -i :5174 -i :5175
```

### Terminar todos los procesos de Node.js
```bash
pkill -f "node"
```

### Limpiar caché de Vite
```bash
rm -rf node_modules/.vite
```

### Reinicio completo del proyecto
```bash
rm -rf node_modules/.vite node_modules/.vite-cache
npm run dev:clean
```

## 🔍 Diagnóstico

Si el servidor no inicia correctamente:

1. **Verificar puertos:** `lsof -i :5173 -i :5174 -i :5175`
2. **Limpiar procesos:** `npm run dev:clean`
3. **Verificar dependencias:** `npm install`
4. **Limpiar caché:** `rm -rf node_modules/.vite`
5. **Reiniciar completamente:** `npm run dev:clean`

## 📞 Soporte

Si los problemas persisten:
1. Revisa esta guía
2. Usa `npm run dev:clean` como primera opción
3. Verifica que no tengas otros proyectos ejecutándose en los mismos puertos
