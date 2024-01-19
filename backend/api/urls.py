from django.urls import path
from . import views

urlpatterns = [
    path('', views.getroutes, name="routes"),
    path("notes/", views.getNotes, name="notes"),
    path("notes/<str:pk>/", views.getNote, name="note"),
]