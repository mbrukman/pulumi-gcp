# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Services(pulumi.CustomResource):
    """
    Allows management of enabled API services for an existing Google Cloud
    Platform project. Services in an existing project that are not defined
    in the config will be removed.
    
    For a list of services available, visit the
    [API library page](https://console.cloud.google.com/apis/library) or run `gcloud services list`.
    
    ~> **Note:** This resource attempts to be the authoritative source on which APIs are enabled, which can
    	lead to conflicts when certain APIs or actions enable other APIs. To just ensure that a specific
    	API is enabled, use the [google_project_service](google_project_service.html) resource.
    """
    def __init__(__self__, __name__, __opts__=None, disable_on_destroy=None, project=None, services=None):
        """Create a Services resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if disable_on_destroy and not isinstance(disable_on_destroy, bool):
            raise TypeError('Expected property disable_on_destroy to be a bool')
        __self__.disable_on_destroy = disable_on_destroy
        __props__['disableOnDestroy'] = disable_on_destroy

        if not project:
            raise TypeError('Missing required property project')
        elif not isinstance(project, basestring):
            raise TypeError('Expected property project to be a basestring')
        __self__.project = project
        """
        The project ID.
        Changing this forces Terraform to attempt to disable all previously managed
        API services in the previous project.
        """
        __props__['project'] = project

        if not services:
            raise TypeError('Missing required property services')
        elif not isinstance(services, list):
            raise TypeError('Expected property services to be a list')
        __self__.services = services
        """
        The list of services that are enabled. Supports
        update.
        """
        __props__['services'] = services

        super(Services, __self__).__init__(
            'gcp:projects/services:Services',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'disableOnDestroy' in outs:
            self.disable_on_destroy = outs['disableOnDestroy']
        if 'project' in outs:
            self.project = outs['project']
        if 'services' in outs:
            self.services = outs['services']
