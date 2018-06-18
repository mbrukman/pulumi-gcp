// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Three different resources help you manage your IAM policy for pubsub topic. Each of these resources serves a different use case:
 * 
 * * `google_pubsub_topic_iam_policy`: Authoritative. Sets the IAM policy for the topic and replaces any existing policy already attached.
 * * `google_pubsub_topic_iam_binding`: Authoritative for a given role. Updates the IAM policy to grant a role to a list of members. Other roles within the IAM policy for the topic are preserved.
 * * `google_pubsub_topic_iam_member`: Non-authoritative. Updates the IAM policy to grant a role to a new member. Other members for the role for the topic are preserved.
 * 
 * ~> **Note:** `google_pubsub_topic_iam_policy` **cannot** be used in conjunction with `google_pubsub_topic_iam_binding` and `google_pubsub_topic_iam_member` or they will fight over what your policy should be.
 * 
 * ~> **Note:** `google_pubsub_topic_iam_binding` resources **can be** used in conjunction with `google_pubsub_topic_iam_member` resources **only if** they do not grant privilege to the same role.
 */
export class TopicIAMPolicy extends pulumi.CustomResource {
    /**
     * Get an existing TopicIAMPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TopicIAMPolicyState): TopicIAMPolicy {
        return new TopicIAMPolicy(name, <any>state, { id });
    }

    /**
     * (Computed) The etag of the topic's IAM policy.
     */
    public /*out*/ readonly etag: pulumi.Output<string>;
    /**
     * The policy data generated by
     * a `google_iam_policy` data source.
     */
    public readonly policyData: pulumi.Output<string>;
    /**
     * The project in which the resource belongs. If it
     * is not provided, the provider project is used.
     */
    public readonly project: pulumi.Output<string>;
    /**
     * The topic name or id to bind to attach IAM policy to.
     */
    public readonly topic: pulumi.Output<string>;

    /**
     * Create a TopicIAMPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicIAMPolicyArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: TopicIAMPolicyArgs | TopicIAMPolicyState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TopicIAMPolicyState = argsOrState as TopicIAMPolicyState | undefined;
            inputs["etag"] = state ? state.etag : undefined;
            inputs["policyData"] = state ? state.policyData : undefined;
            inputs["project"] = state ? state.project : undefined;
            inputs["topic"] = state ? state.topic : undefined;
        } else {
            const args = argsOrState as TopicIAMPolicyArgs | undefined;
            if (!args || args.policyData === undefined) {
                throw new Error("Missing required property 'policyData'");
            }
            if (!args || args.topic === undefined) {
                throw new Error("Missing required property 'topic'");
            }
            inputs["policyData"] = args ? args.policyData : undefined;
            inputs["project"] = args ? args.project : undefined;
            inputs["topic"] = args ? args.topic : undefined;
            inputs["etag"] = undefined /*out*/;
        }
        super("gcp:pubsub/topicIAMPolicy:TopicIAMPolicy", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering TopicIAMPolicy resources.
 */
export interface TopicIAMPolicyState {
    /**
     * (Computed) The etag of the topic's IAM policy.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The policy data generated by
     * a `google_iam_policy` data source.
     */
    readonly policyData?: pulumi.Input<string>;
    /**
     * The project in which the resource belongs. If it
     * is not provided, the provider project is used.
     */
    readonly project?: pulumi.Input<string>;
    /**
     * The topic name or id to bind to attach IAM policy to.
     */
    readonly topic?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TopicIAMPolicy resource.
 */
export interface TopicIAMPolicyArgs {
    /**
     * The policy data generated by
     * a `google_iam_policy` data source.
     */
    readonly policyData: pulumi.Input<string>;
    /**
     * The project in which the resource belongs. If it
     * is not provided, the provider project is used.
     */
    readonly project?: pulumi.Input<string>;
    /**
     * The topic name or id to bind to attach IAM policy to.
     */
    readonly topic: pulumi.Input<string>;
}