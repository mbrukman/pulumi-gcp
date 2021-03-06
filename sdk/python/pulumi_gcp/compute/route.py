# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Route(pulumi.CustomResource):
    """
    Manages a network route within GCE. For more information see
    [the official documentation](https://cloud.google.com/compute/docs/vpc/routes)
    and
    [API](https://cloud.google.com/compute/docs/reference/latest/routes).
    """
    def __init__(__self__, __name__, __opts__=None, description=None, dest_range=None, name=None, network=None, next_hop_gateway=None, next_hop_instance=None, next_hop_instance_zone=None, next_hop_ip=None, next_hop_vpn_tunnel=None, priority=None, project=None, tags=None):
        """Create a Route resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        __props__['description'] = description

        if not dest_range:
            raise TypeError('Missing required property dest_range')
        elif not isinstance(dest_range, basestring):
            raise TypeError('Expected property dest_range to be a basestring')
        __self__.dest_range = dest_range
        """
        The destination IPv4 address range that this
        route applies to.
        """
        __props__['destRange'] = dest_range

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        A unique name for the resource, required by GCE.
        Changing this forces a new resource to be created.
        """
        __props__['name'] = name

        if not network:
            raise TypeError('Missing required property network')
        elif not isinstance(network, basestring):
            raise TypeError('Expected property network to be a basestring')
        __self__.network = network
        """
        The name or self_link of the network to attach this route to.
        """
        __props__['network'] = network

        if next_hop_gateway and not isinstance(next_hop_gateway, basestring):
            raise TypeError('Expected property next_hop_gateway to be a basestring')
        __self__.next_hop_gateway = next_hop_gateway
        """
        The URL of the internet gateway to route
        to if this route is matched. The alias "default-internet-gateway" can also
        be used.
        """
        __props__['nextHopGateway'] = next_hop_gateway

        if next_hop_instance and not isinstance(next_hop_instance, basestring):
            raise TypeError('Expected property next_hop_instance to be a basestring')
        __self__.next_hop_instance = next_hop_instance
        """
        The name of the VM instance to route to
        if this route is matched.
        """
        __props__['nextHopInstance'] = next_hop_instance

        if next_hop_instance_zone and not isinstance(next_hop_instance_zone, basestring):
            raise TypeError('Expected property next_hop_instance_zone to be a basestring')
        __self__.next_hop_instance_zone = next_hop_instance_zone
        """
        
        The zone of the instance specified in `next_hop_instance`.
        """
        __props__['nextHopInstanceZone'] = next_hop_instance_zone

        if next_hop_ip and not isinstance(next_hop_ip, basestring):
            raise TypeError('Expected property next_hop_ip to be a basestring')
        __self__.next_hop_ip = next_hop_ip
        """
        The IP address of the next hop if this route
        is matched.
        """
        __props__['nextHopIp'] = next_hop_ip

        if next_hop_vpn_tunnel and not isinstance(next_hop_vpn_tunnel, basestring):
            raise TypeError('Expected property next_hop_vpn_tunnel to be a basestring')
        __self__.next_hop_vpn_tunnel = next_hop_vpn_tunnel
        """
        The name of the VPN to route to if this
        route is matched.
        """
        __props__['nextHopVpnTunnel'] = next_hop_vpn_tunnel

        if priority and not isinstance(priority, int):
            raise TypeError('Expected property priority to be a int')
        __self__.priority = priority
        """
        The priority of this route, used to break ties. Defaults to 1000.
        """
        __props__['priority'] = priority

        if project and not isinstance(project, basestring):
            raise TypeError('Expected property project to be a basestring')
        __self__.project = project
        """
        The ID of the project in which the resource belongs. If it
        is not provided, the provider project is used.
        """
        __props__['project'] = project

        if tags and not isinstance(tags, list):
            raise TypeError('Expected property tags to be a list')
        __self__.tags = tags
        """
        The tags that this route applies to.
        """
        __props__['tags'] = tags

        __self__.next_hop_network = pulumi.runtime.UNKNOWN
        """
        The name of the next hop network, if available.
        """
        __self__.self_link = pulumi.runtime.UNKNOWN
        """
        The URI of the created resource.
        """

        super(Route, __self__).__init__(
            'gcp:compute/route:Route',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'description' in outs:
            self.description = outs['description']
        if 'destRange' in outs:
            self.dest_range = outs['destRange']
        if 'name' in outs:
            self.name = outs['name']
        if 'network' in outs:
            self.network = outs['network']
        if 'nextHopGateway' in outs:
            self.next_hop_gateway = outs['nextHopGateway']
        if 'nextHopInstance' in outs:
            self.next_hop_instance = outs['nextHopInstance']
        if 'nextHopInstanceZone' in outs:
            self.next_hop_instance_zone = outs['nextHopInstanceZone']
        if 'nextHopIp' in outs:
            self.next_hop_ip = outs['nextHopIp']
        if 'nextHopNetwork' in outs:
            self.next_hop_network = outs['nextHopNetwork']
        if 'nextHopVpnTunnel' in outs:
            self.next_hop_vpn_tunnel = outs['nextHopVpnTunnel']
        if 'priority' in outs:
            self.priority = outs['priority']
        if 'project' in outs:
            self.project = outs['project']
        if 'selfLink' in outs:
            self.self_link = outs['selfLink']
        if 'tags' in outs:
            self.tags = outs['tags']
