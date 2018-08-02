from django.conf.urls import url

from .views import test_users

app_name = 'users'


urlpatterns = [
    url(r'^test/', test_users, name='test_users')
]