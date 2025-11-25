# Autor: Alberto Martínez
from django.db import models

# Create your models here.

class Usuario(models.Model):
    id_usuario = models.IntegerField(max_length=11)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    fecha_nacimiento = models.DateField()
    telefono = models.CharField(max_length=20)
    
    def __str__(self):
        return self.nombre  # hago que se muestre el nombre para la captura, al no saber como lo querias lo hago diferente en cada clase
    
class Coche(models.Model):
    id_coche = models.IntegerField(max_length=11)
    matricula = models.CharField(max_length=15)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50)
    cilindrada = models.IntegerField(max_length=11)
    telefono = models.CharField(max_length=20)
    id_usuario = models.IntegerField(max_length=11)
