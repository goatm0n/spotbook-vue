from django.urls import path
from .views import vueView

urlpatterns = [
    path('', vueView),
]