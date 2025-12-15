import { IUserEventModule } from "@cupist/analytics-core";
export declare const analytics: import("@react-native-firebase/analytics").FirebaseAnalyticsTypes.Module;
export declare function convertFirebaseUserProperties(userProperties: Record<string, any>): {
    [key: string]: string | null;
};
export declare const getFirebaseInstance: (props: Partial<IUserEventModule>) => IUserEventModule;
//# sourceMappingURL=user-event.d.ts.map