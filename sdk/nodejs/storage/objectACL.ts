// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Creates a new object ACL in Google cloud storage service (GCS). For more information see 
 * [the official documentation](https://cloud.google.com/storage/docs/access-control/lists) 
 * and 
 * [API](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls).
 */
export class ObjectACL extends pulumi.CustomResource {
    /**
     * Get an existing ObjectACL resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectACLState): ObjectACL {
        return new ObjectACL(name, <any>state, { id });
    }

    /**
     * The name of the bucket it applies to.
     */
    public readonly bucket: pulumi.Output<string>;
    /**
     * The name of the object it applies to.
     */
    public readonly object: pulumi.Output<string>;
    /**
     * The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
     */
    public readonly predefinedAcl: pulumi.Output<string | undefined>;
    /**
     * List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details. Must be set if `predefined_acl` is not.
     */
    public readonly roleEntities: pulumi.Output<string[] | undefined>;

    /**
     * Create a ObjectACL resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectACLArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: ObjectACLArgs | ObjectACLState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ObjectACLState = argsOrState as ObjectACLState | undefined;
            inputs["bucket"] = state ? state.bucket : undefined;
            inputs["object"] = state ? state.object : undefined;
            inputs["predefinedAcl"] = state ? state.predefinedAcl : undefined;
            inputs["roleEntities"] = state ? state.roleEntities : undefined;
        } else {
            const args = argsOrState as ObjectACLArgs | undefined;
            if (!args || args.bucket === undefined) {
                throw new Error("Missing required property 'bucket'");
            }
            if (!args || args.object === undefined) {
                throw new Error("Missing required property 'object'");
            }
            inputs["bucket"] = args ? args.bucket : undefined;
            inputs["object"] = args ? args.object : undefined;
            inputs["predefinedAcl"] = args ? args.predefinedAcl : undefined;
            inputs["roleEntities"] = args ? args.roleEntities : undefined;
        }
        super("gcp:storage/objectACL:ObjectACL", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ObjectACL resources.
 */
export interface ObjectACLState {
    /**
     * The name of the bucket it applies to.
     */
    readonly bucket?: pulumi.Input<string>;
    /**
     * The name of the object it applies to.
     */
    readonly object?: pulumi.Input<string>;
    /**
     * The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
     */
    readonly predefinedAcl?: pulumi.Input<string>;
    /**
     * List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details. Must be set if `predefined_acl` is not.
     */
    readonly roleEntities?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectACL resource.
 */
export interface ObjectACLArgs {
    /**
     * The name of the bucket it applies to.
     */
    readonly bucket: pulumi.Input<string>;
    /**
     * The name of the object it applies to.
     */
    readonly object: pulumi.Input<string>;
    /**
     * The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
     */
    readonly predefinedAcl?: pulumi.Input<string>;
    /**
     * List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details. Must be set if `predefined_acl` is not.
     */
    readonly roleEntities?: pulumi.Input<pulumi.Input<string>[]>;
}
