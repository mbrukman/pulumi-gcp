// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * This data source fetches the project name, and provides the appropriate URLs to use for container registry for this project.
 * 
 * The URLs are computed entirely offline - as long as the project exists, they will be valid, but this data source does not contact Google Container Registry (GCR) at any point.
 */
export function getRegistryImage(args: GetRegistryImageArgs): Promise<GetRegistryImageResult> {
    return pulumi.runtime.invoke("gcp:container/getRegistryImage:getRegistryImage", {
        "digest": args.digest,
        "name": args.name,
        "project": args.project,
        "region": args.region,
        "tag": args.tag,
    });
}

/**
 * A collection of arguments for invoking getRegistryImage.
 */
export interface GetRegistryImageArgs {
    readonly digest?: pulumi.Input<string>;
    readonly name: pulumi.Input<string>;
    readonly project?: pulumi.Input<string>;
    readonly region?: pulumi.Input<string>;
    readonly tag?: pulumi.Input<string>;
}

/**
 * A collection of values returned by getRegistryImage.
 */
export interface GetRegistryImageResult {
    readonly imageUrl: string;
    readonly project: string;
}
