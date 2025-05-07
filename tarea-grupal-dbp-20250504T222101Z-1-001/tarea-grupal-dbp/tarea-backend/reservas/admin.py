from django.contrib import admin
from .models import Lugar, Habitacion, Cliente, Reserva

# Registra todos los modelos
admin.site.register(Lugar)
admin.site.register(Habitacion)
admin.site.register(Cliente)
admin.site.register(Reserva)