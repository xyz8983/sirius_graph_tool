from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import UploadJSONandImage, UploadJSONImageForm
from .models import UploadFileField
import shutil
import os



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
        # form.Form plus uploadfieldclass instance
        context = {}
        files = self.request.FILES
        form = UploadJSONandImage(self.request.POST, files)
        if os.path.exists('upload_files/'):
            shutil.rmtree('upload_files/')
        if form.is_valid() and UploadJSONandImage.validate_extension(files.getlist('file_field')):
            for file in files.getlist('file_field'):
                upload_file_instance = UploadFileField(file_field=file)
                upload_file_instance.save()
                if UploadJSONandImage.get_extension(file.name) == 'json':
                    json_file_url = upload_file_instance.file_field.url
                    context['json_file_url'] = json_file_url
                print('url?', upload_file_instance.file_field.url)
                # upload_files/correlation_graph_y4r9KGs.json
                print('path?', upload_file_instance.file_field.path)
                #  /Users/mm17060/Projects/Research/sirius_graph_tool/upload_files/correlation_graph_y4r9KGs.json
        else:
            form_error = 'File Upload Error'
            context['form_error'] = form_error
        context['upload_form'] = form
        return render(self.request, self.template_name, context)

    def post_2(self, *args, **kwargs):
        """
        support upload multiple files in a POST request
        :return: a HTTPResponse
        """
        # files = self.request.FILES.getlist('file_field')
        files = self.request.FILES
        form = UploadJSONImageForm(self.request.POST, files)
        if form.is_valid():
            # only save one file here
            form.save()
        context = {'upload_form': form}
        return render(self.request, self.template_name, context)

