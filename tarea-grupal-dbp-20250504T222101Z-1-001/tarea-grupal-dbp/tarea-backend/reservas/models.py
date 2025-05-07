from django.db import models

# Create your models here.
class Lugar(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField(blank= True)  
    imagen = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nombre
    
class Habitacion(models.Model):
    nombre_hotel = models.CharField(max_length=100)
    lugar = models.ForeignKey(Lugar, on_delete=models.CASCADE, related_name="habitaciones")
    num_hab = models.CharField(max_length=10, unique=True)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    capacidad = models.IntegerField()
    descripcion = models.TextField()
    reservada = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.nombre_hotel} - Hab. {self.num_hab}"


class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    cedula = models.CharField(max_length=20, unique=True)
    email = models.EmailField(unique=True)
    telefono = models.CharField(max_length=15, unique=True)
    habitaciones_reservadas = models.ManyToManyField(Habitacion, through='Reserva', related_name='clientes', blank=True)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Reserva(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name="reservas")
    habitacion = models.ForeignKey(Habitacion, on_delete=models.CASCADE, related_name="reservas")
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    fecha_reserva = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('habitacion', 'fecha_inicio', 'fecha_fin')

    def __str__(self):
        return f"Reserva #{self.id} - {self.cliente}"