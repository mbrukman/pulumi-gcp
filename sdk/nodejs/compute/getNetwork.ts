// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Get a network within GCE from its name.
 */
export function getNetwork(args: GetNetworkArgs): Promise<GetNetworkResult> {
    return pulumi.runtime.invoke("gcp:compute/getNetwork:getNetwork", {
        "name": args.name,
        "project": args.project,
    });
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    /**
     * The name of the network.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The ID of the project in which the resource belongs. If it
     * is not provided, the provider project is used.
     */
    readonly project?: pulumi.Input<string>;
}

/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    /**
     * Description of this network.
     */
    readonly description: string;
    /**
     * The IP address of the gateway.
     */
    readonly gatewayIpv4: string;
    /**
     * The URI of the resource.
     */
    readonly selfLink: string;
    /**
     * the list of subnetworks which belong to the network
     */
    readonly subnetworksSelfLinks: string[];
}
