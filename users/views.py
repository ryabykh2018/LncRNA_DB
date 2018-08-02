from django.shortcuts import render
from django.http import JsonResponse

from django.contrib.auth import authenticate, login as django_login, logout as django_logout, get_user_model

import json

def register(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        if get_user_model().objects.filter(username=username).exists():
            return JsonResponse({'response': 'error'})
        user = get_user_model().objects.create_user(
            username=username, password=password, email=email
        )
        user = authenticate(username=username, password=password)

        if user:
            django_login(request, user)
            return JsonResponse({'response': 'success'})
        else:
            return JsonResponse({ 'response': 'faild'})

def login(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            django_login(request, user)
            return JsonResponse({'response': 'success'})

        return JsonResponse({'response': 'error'})

def logout(request):
    django_logout(request)
    return JsonResponse({ 'response' : 'success' })