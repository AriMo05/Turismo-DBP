from rest_framework import generics
from .models import Cliente, Lugar, Habitacion, Reserva
from .serializers import ClienteSerializer, LugarSerializer, HabitacionSerializer, ReservaSerializer

#Cliente
class ClienteListCreateView(generics.ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ClienteDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

#Lugar
class LugarListCreateView(generics.ListCreateAPIView):
    queryset = Lugar.objects.all()
    serializer_class = LugarSerializer

class LugarDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lugar.objects.all()
    serializer_class = LugarSerializer

#Habitacion
class HabitacionListCreateView(generics.ListCreateAPIView):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer

class HabitacionesPorLugarView(generics.ListAPIView):
    serializer_class = HabitacionSerializer

    def get_queryset(self):
        lugar_id = self.kwargs['lugar_id']
        return Habitacion.objects.filter(lugar_id=lugar_id)

class HabitacionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Habitacion.objects.all()
    serializer_class = HabitacionSerializer

#Reserva
class ReservaListCreateView(generics.ListCreateAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

class ReservasPorClienteView(generics.ListAPIView):
    serializer_class = ReservaSerializer
    
    def get_queryset(self):
        cliente_id = self.kwargs['cliente_id']
        return Reserva.objects.filter(cliente_id=cliente_id)

class ReservaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

