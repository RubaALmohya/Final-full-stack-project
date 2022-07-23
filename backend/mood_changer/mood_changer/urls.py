
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user_app/', include('user_app.urls')),
    path('mood_app', include('mood_app.urls')),
    path('profile_app', include('profile_app.urls')),
]
