from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import UploadJSONandImage


def index(request):
    return HttpResponse("Welcome to Sirius Graph Tool")

def upload_view(request):
    pass

def constellation_view(request):
    pass
class HomePageView(TemplateView):
    template_name = 'base.html'

    def get_context_data(self, *args, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        context['name'] = 'User'
        form = UploadJSONandImage()
        context['upload_form'] = form

        return context

    def post(self, *args, **kwargs):
        """
        support upload multiple files in a POST request
        :return: a HTTPResponse
        """
        # files = self.request.FILES.getlist('file_field')
        files = self.request.FILES
        print('what are files', self.request.FILES)
        form = UploadJSONandImage(self.request.POST, files)
        if form.is_valid():
            for f in files.values():
                print('what is the files', type(f))
                # return a django.core.files.uploadedfile.InMemoryUploadedFile type

        context = {'upload_form': form}
        return render(self.request, self.template_name, context)

