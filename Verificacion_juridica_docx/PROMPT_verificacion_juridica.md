# Prompt para verificación jurídica de artículos (IA jurídica)

> Uso: adjunta **un solo archivo .docx** por conversación y pega el prompt de abajo. Repite el proceso con cada uno de los 16 archivos. Trabaja de uno en uno para que la IA no mezcle contenidos ni diluya el análisis.

---

## PROMPT

Actúa como abogado revisor especializado en **derecho civil catalán de sucesiones** (Llibre IV del Codi Civil de Catalunya) y en **fiscalidad sucesoria española** (Impuesto sobre Sucesiones y Donaciones, modelos 650 y 660), con dominio de la práctica notarial y registral. Tu tarea es **verificar la exactitud jurídica** del documento adjunto, no reescribirlo ni mejorar su estilo.

### Contexto del documento
El texto es un artículo de blog o un post de LinkedIn divulgativo dirigido a despachos y asesorías. Firma: Miquel Fàbrega. Ámbito principal: Cataluña. Puede contener afirmaciones sobre la legítima catalana, la quarta falcídia, el cuaderno particional (quadern particional), el caudal computable, plazos, y cifras estadísticas. Algunas piezas están en catalán.

### Qué debes verificar
Revisa **cada afirmación jurídica o cuantitativa** del texto y contrástala con la normativa **vigente a día de hoy**. Presta atención especial a:

1. **Citas normativas.** ¿Cada artículo citado (p. ej. art. 451-5 CCCat) existe, está vigente y dice lo que el texto afirma? Señala números de artículo incorrectos, derogados o mal atribuidos.
2. **Legítima catalana.** Cuantía (cuarta parte del caudal computable), naturaleza (derecho de crédito vs. cuota de bienes), legitimarios, cómputo global vs. por cabeza, base de cálculo.
3. **Quarta falcídia / cuarta falcidia.** Definición, presupuestos de aplicación, mecanismo de reducción de legados, requisitos para que el heredero la conserve, regulación aplicable en el CCCat.
4. **Cuaderno particional y fiscalidad.** Inventario, caudal relicto neto, adjudicaciones, validación cruzada con los modelos 650/660, plazos de presentación del ISD, competencia territorial y normativa autonómica aplicable.
5. **Diferencias con el régimen del Código Civil estatal** cuando el texto las contraste.
6. **Cifras y datos estadísticos** (porcentajes, "3 días → 20 minutos", volúmenes patrimoniales, etc.): indica cuáles son afirmaciones jurídicas verificables y cuáles son datos de mercado que requieren fuente (no jurídicos).

### Cómo debes responder
Para **cada afirmación relevante**, devuelve una fila con este formato:

| # | Cita textual (breve) | Veredicto | Norma / fundamento | Corrección propuesta |
|---|----------------------|-----------|--------------------|----------------------|

Donde **Veredicto** es uno de:
- ✅ **Correcto** — jurídicamente exacto.
- ⚠️ **Impreciso / matizable** — no es falso pero induce a error o le falta un matiz relevante.
- ❌ **Incorrecto** — contradice la norma vigente.
- ❓ **No verificable / requiere fuente** — afirmación fáctica o estadística ajena al derecho.

Reglas:
- **Cita siempre el artículo y cuerpo legal concreto** (CCCat, LISD, reglamento, etc.) en la columna de fundamento. Si no puedes localizar la norma, dilo explícitamente en lugar de suponerla.
- **No inventes referencias.** Si dudas de la vigencia de una norma, márcalo como ❓ y explica la duda.
- Distingue entre **error de derecho** y **cuestión de matiz divulgativo**.
- Ten en cuenta reformas recientes del Llibre IV y de la normativa fiscal autonómica que puedan afectar a plazos, cuantías o bonificaciones.
- Si el documento está en catalán, responde en catalán; si está en castellano, responde en castellano.

### Entregable final
Cierra con:
1. **Resumen ejecutivo** (3–5 líneas): ¿es publicable tal cual, publicable con correcciones menores, o requiere revisión de fondo?
2. **Lista priorizada de errores ❌** que deben corregirse antes de publicar.
3. **Advertencias ⚠️** recomendables pero no bloqueantes.
4. **Afirmaciones ❓** que necesitan una fuente citada o un caveat.

No modifiques el texto original; limítate a diagnosticar y proponer la corrección exacta.
