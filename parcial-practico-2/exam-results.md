# Resultados del parcial práctico 2

Registrar resultados reales después de implementar y probar los endpoints. Sustituir los IDs de ejemplo por los utilizados.

| Petición y datos utilizados | Código esperado | Código obtenido | Observación |
| --- | --- | --- | --- |
| Crear una reserva con datos válidos y sala existente. | 201 | Pendiente | |
| Crear con participants como texto. | 400 | Pendiente | |
| Crear con una propiedad adicional, como status. | 400 | Pendiente | |
| Crear con una sala inexistente. | 404 | Pendiente | |
| Cancelar una reserva activa y consultar el cambio guardado. | 200 | Pendiente | |
| Cancelar de nuevo la misma reserva. | 409 | Pendiente | |
| Intentar cancelar con ID abc. | 400 | Pendiente | |
| Intentar cancelar con un ID entero inexistente. | 404 | Pendiente | |

## Pruebas unitarias

Registrar el resultado de `npm test`.

| Caso | Resultado obtenido |
| --- | --- |
| 1. La regla real rechaza una reserva cancelada. | Pendiente |
| 2. El servicio cancela y guarda una reserva activa. | Pendiente |
| 3. Si la regla simulada rechaza, conserva active y no guarda. | Pendiente |

Resumen de ejecución: pendiente.

Las peticiones realizadas fueron:
{/api}{/api, GET} {/api/rooms} {/api/rooms, GET} {/api/reservations}{/api/reservations, POST} {/api/reservations/:id/cancel, PATCH}{/api/reservations, GET} {/api/reservations/:id, GET} 

y estos fueron los resultados del test: Test Suites: 2 failed, 2 total
Tests:       0 total
Snapshots:   0 total
Time:        1.035 s
Ran all test suites.
▶ ReservationRulesService
  ▶ rejects a reservation that is already cancelled
    ✔ rejects an order that is already ready (17.3552ms)
  ✔ rejects a reservation that is already cancelled (18.0774ms)
✔ ReservationRulesService (19.1889ms)
ℹ tests 2
ℹ suites 1
ℹ pass 2
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 134.3977
 
 Y estos fueron algunos de los codigos http:
 GET http://localhost:3003/api/rooms: 200 ok
 GET http://localhost:3003/api/reservations: 200 ok
 GET http://localhost:3003/api/reservations/1: 200 ok
 PATCH http://localhost:3003/api/reservations/1/cancel: 200
