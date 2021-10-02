from django.shortcuts import render

def vueView(request):
    return render(request, 'frontendVue/vue.html')
